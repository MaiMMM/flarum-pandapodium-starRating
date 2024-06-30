import Extend from 'flarum/common/extenders';
import Post from 'flarum/common/models/Post';
import User from 'flarum/common/models/User';

export default [
    new Extend.Model(Post)
        .attribute<number>('maimmm_rating'),
]