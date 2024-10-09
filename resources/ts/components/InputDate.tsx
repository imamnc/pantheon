import moment from "moment";
import React from "react";
import Flatpickr from "react-flatpickr";
// This only uses yard add shortcut-buttons-flatpickr, but no declare module yet, so we bypass this shit with ts-ignore
// @ts-ignore
import ShortcutButtonsPlugin from 'shortcut-buttons-flatpickr'
import "flatpickr/dist/flatpickr.css";

// If you need to add more values, read both the docs here :
// https://preview.keenthemes.com/metronic8/react/docs/flatpickr
// https://github.com/haoxins/react-flatpickr

// I'm using a plugins for flatpickr, also read the docs here : https://github.com/jcsmorais/shortcut-buttons-flatpickr
interface Props {
    value: any;
    onChange?: any
    options?: any
}

class InputDate extends React.Component<Props> {
    render() {

        let options = this.props.options
        // In the future, you can add more into this plugins if you need more buttons. For now, today button works fine
        options.plugins = [
            ShortcutButtonsPlugin({
                button: [
                    {
                        attributes: {
                            class: 'btn'
                        },
                        label: "Today"
                    }
                ],
                onClick: (index: any, fp: any) => {
                    fp.setDate(new Date(), true);
                    setTimeout(() => fp.close());
                }
            })
        ]

        return <>
            <Flatpickr
                value={this.props.value}
                onChange={this.props.onChange}
                options={options}
                className='form-control'
                placeholder='Pick date'
            />
        </>
    }
}

export default InputDate
