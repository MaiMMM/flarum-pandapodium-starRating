import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';

export default class Stars extends Component {
    view() {
        return m('.Stars',  {className: this.attrs.editable ? 'editable' : ''},
        
        [1,2,3,4,5].map(
            rating => {
                const active = this.attrs.value >= rating;

                return icon(
                    `fa${active ? 's' : 'r'} fa-star`,
                    {onclick: () => {
                        // if not editable, do nothing
                        if(!this.attrs.editable) {return;}

                        // if click on the same star, set value to 0
                        if(this.attrs.value === rating) {
                            this.attrs.onchange(0);
                        } else {
                            this.attrs.onchange(rating);
                        }
                    }}
                )
            }
        ));
    }
}