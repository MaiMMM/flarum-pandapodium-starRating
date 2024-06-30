import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import Stars from './components/Stars';
import ReplyComposer from 'flarum/forum/components/ReplyComposer';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('maimmm/flarum-ext-starrating', () => {
  console.log('[maimmm/flarum-ext-starrating] Hello, forum!');

  // -------------------------------------------------------------------------
  // HEADER
  extend(HeaderPrimary.prototype, 'items', function(items) {
    items.add('google', <a href="https://google.com">Google</a>);
  });

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
    items.add('stars', Stars.component(
      {
        value: 3,
        editable:false
        // onchange: value => {
        //   this.attrs.post.save({rating: value});
        // }
      }
    ));
  });

});
