import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';

export default class Stars extends Component {
    view() {
        return m('.Stars', [1,2,3,4,5].map(rating => icon('fas fa-star')));
    }
}