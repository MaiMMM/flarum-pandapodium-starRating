import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import Stars from './components/Stars';
import ReplyComposer from 'flarum/forum/components/ReplyComposer';
import CommentPost from 'flarum/forum/components/CommentPost';
import DiscussionHero from 'flarum/forum/components/DiscussionHero';
import EditPostComposer from 'flarum/forum/components/EditPostComposer';

app.initializers.add('maimmm/flarum-ext-starrating', () => {
  // -------------------------------------------------------------------------
  // extend(ReplyComposer, 'initAttrs', function (_nothing, attrs) {
  //   attrs.rating = 3;
  // });

  extend(ReplyComposer.prototype, 'headerItems', function (items) {

    // Two restrictions fore rendering Stars components 
    // 1. discussion has either tag (Product Discussion) or (Bike Shed)
    // 2. author of the post has not rated the post yet

    let isProductDiscussion = this.attrs.discussion.tags().some(tag => tag.slug() === 'product-discussion');
    let isBikeShed = this.attrs.discussion.tags().some(tag => tag.slug() === 'bike-shed');

    // if failed to meet the restrictions, return without next check
    if(!isProductDiscussion) {return;}

    const posts = this.attrs.discussion.posts();
    const currentUserId = app.session.user.id();

    // iterate throught posts, first make sure post isn't null or undefined,
    // then check post.data.attributes.maimmm_rating isn't 0
    // finally check post.data.relationships.user.data.id is equal to currentUserId
    let hasRated = posts.some(post => post && post.data.attributes.maimmm_rating !== 0 && post.data.relationships.user.data.id === currentUserId);
    // if user has rated, return without rendering Stars component
    if(hasRated) {return;}

    // ----------------------------------------------------------
      items.add('stars', Stars.component(
        {
          value: this.rating,
          onchange: value => {
            this.rating = value;
          },
          editable:true,
        }
      ));
    // }
  });

  // data
  extend(ReplyComposer.prototype, 'data', function(data) {
    data.maimmm_rating = this.rating;
  });

  // -------------------------------------------------------------------------
  // COMMENT
  extend(CommentPost.prototype, 'headerItems', function (items) {
    const rating = this.attrs.post.attribute('maimmm_rating');

    if(rating){
      items.add('stars', Stars.component(
        {
          value: rating,
          editable:false,
          size: 'small'
        }
      ));
    }
  });

  // -------------------------------------------------------------------------
  // EDIT COMPOSER
  extend(EditPostComposer.prototype, 'headerItems', function(items) {
      // do not render if no rating exists
      if(this.attrs.post.data.attributes.maimmm_rating === 0){
        return;
      }
      
      items.add('stars', Stars.component(
        {
          // if this.rating exists set to this.rating, else set to rating to this.attrs.post.data.attributes.maimmm_rating
          value: this.rating ? this.rating : this.attrs.post.data.attributes.maimmm_rating,
          onchange: value => {
            this.rating = value;
          },
          editable:true,
        }
      ));
    }
  );

  extend(EditPostComposer.prototype, 'data', function(data) {
    data.maimmm_rating = this.rating;
  });

});


// -------------------------------------------------------------------------
// HEADER
extend(DiscussionHero.prototype, 'items', function (items) {
  // if discussion has either tag (Product Discussion) or (Bike Shed)
  let isProductDiscussion = this.attrs.discussion.tags().some(tag => tag.slug() === 'product-discussion');
  let isBikeShed = this.attrs.discussion.tags().some(tag => tag.slug() === 'bike-shed');

  // if failed to meet the restrictions, return without next check
  if(!isProductDiscussion) {return;}
  
  let rating = 0;
  const posts = app.store.all('posts').filter(post => post.discussion() === this.attrs.discussion);

  let numOfZeroStarPost = 0;
  // add each post's data.attributes.maimmm_rating to rating and then divide by the number of posts
  posts.forEach(post => {
    if(post.data.attributes.maimmm_rating === 0){
      numOfZeroStarPost++;
    }
    rating += post.data.attributes.maimmm_rating;
  });
  rating = rating / (posts.length - numOfZeroStarPost);

  if (rating) {
      items.add('stars', 
      Stars.component({
          value: rating,
          hoverToViewValueTooltip: true,
      }));
  }
});

