import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';

// modified from https://github.com/kilowhat/flarum-ext-ratings/blob/master/js/src/forum/components/Stars.js
export default class Stars extends Component {
    view() {
        return m(
        '.Stars',  
        
        // Attributes passed to components are available throughout the class via this.attrs.
        {className: this.attrs.editable ? 'editable' : ''},
        
        [1,2,3,4,5].map(
            rating => {
                let stars = this.attrs.value;

                const active = (stars + 0.29) >= rating;
                const isHalf = ( rating - stars) >= 0.39 && (rating - stars) < 0.71;

                // console.log(isHalf)
                // rating might be a float
                // if difference is 0-0.3, show same number of star
                // if difference is 0.4-0.6, show half star
                // if difference is 0.7-1, show next star

                return icon(
                    `fa${active || isHalf ? 's' : 'r'} fa-star${isHalf ? '-half-alt' : ''}`,
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