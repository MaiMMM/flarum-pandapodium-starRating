import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import Stars from './components/Stars';
import ReplyComposer from 'flarum/forum/components/ReplyComposer';
import CommentPost from 'flarum/forum/components/CommentPost';
import DiscussionHero from 'flarum/forum/components/DiscussionHero';

app.initializers.add('maimmm/flarum-ext-starrating', () => {
  console.log('[maimmm/flarum-ext-starrating] Hello, forum!');

  // -------------------------------------------------------------------------
  // init
  extend(ReplyComposer.prototype, 'init', function() {
    this.rating = 0;
  });

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
          editable:false
        }
      ));
    }
  });

});


// -------------------------------------------------------------------------
// HEADER
extend(DiscussionHero.prototype, 'items', function (items) {
  // console.log(this)
  let rating = 0;
  const posts = app.store.all('posts').filter(post => post.discussion() === this.attrs.discussion);
  
  // add each post's data.attributes.maimmm_rating to rating and then divide by the number of posts
  posts.forEach(post => {
    rating += post.data.attributes.maimmm_rating;
  });
  rating = rating / posts.length;

  console.log(rating)
  if (rating) {
      items.add('stars', Stars.component({
          value: rating,
      }));
  }
});