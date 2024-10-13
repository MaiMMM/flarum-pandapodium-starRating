import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';
import Tooltip from 'flarum/common/components/Tooltip'

// modified from https://github.com/kilowhat/flarum-ext-ratings/blob/master/js/src/forum/components/Stars.js
export default class Stars extends Component {

    oninit(vnode) {
        super.oninit(vnode);
        this.tooltip = null; // Initialize a reference for Tooltip
        this.tooltipValue = this.attrs.value.toFixed(2) == 0 ? 'no rating' : this.attrs.value.toFixed(2);
    }

    view() {
        return m('.Stars',
            // hoverToViewValueTooltip(optional): whether to show a tooltip when hovering over the stars to show the value
            m(Tooltip, 
                {
                    text: this.attrs.hoverToViewValueTooltip ? this.tooltipValue : 'You can only rate once',
                    position: 'bottom',
                    onupdate(vnode) {
                        // if the value of the stars has changed, recreate the tooltip
                        vnode.state.shouldRecreateTooltip = true;
                    }
                },
                
                m('.Stars',  
                    // Attributes passed to components are available throughout the class via this.attrs.
                    // editable: whether the stars are clickable
                    // size(optional): 'small' to make the stars smaller
                    {className: `
                        ${this.attrs.editable ? 'editable' : ''}  
                        ${this.attrs.size === 'small' ? 'smallStar' : ''}`
                    },
                    
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
                    )
                ),
            ),
            // this.attrs.editable ? m('span', {className: 'rate-once-text'}, 'You can only rate once') : null
        )
            
    }

}