import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import Stars from './components/Stars';
import ReplyComposer from 'flarum/forum/components/ReplyComposer';

app.initializers.add('maimmm/flarum-ext-starrating', () => {
  console.log('[maimmm/flarum-ext-starrating] Hello, forum!');

  extend(HeaderPrimary.prototype, 'items', function(items) {
    items.add('google', <a href="https://google.com">Google</a>);
  });

  extend(ReplyComposer.prototype, 'headerItems', function (items) {
    items.add('test', Stars.component());
  });
});
