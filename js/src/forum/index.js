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
    items.add('stars', Stars.component(
      {
        value: this.rating,
        onchange: value => {
          this.rating = value;
        },
        editable:true,
      }
    ));
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
      // let rating = this.attrs.post.data.attributes.maimmm_rating;
      
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
  // console.log(this)
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

  // console.log(rating)
  if (rating) {
      items.add('stars', 
      Stars.component({
          value: rating,
          hoverToViewValueTooltip: true,
      }));
  }
});

