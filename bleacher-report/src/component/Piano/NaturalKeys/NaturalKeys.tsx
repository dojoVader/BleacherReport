import React, { SyntheticEvent } from 'react';
import './NaturalKeys.scss';
import { PianoKeysProps, PianoKeyState } from '../Piano';

let _callbackFn: any;
export default class NaturalKeys extends React.Component<PianoKeysProps, PianoKeyState> {

    constructor(props: PianoKeysProps) {
        super(props);
        this.state = {
            letter: this.props.letter,
        };
    }


    onTap = (e: SyntheticEvent) => {
        console.log("Tapped letter %s", this.state.letter);
        _callbackFn(this.state.letter);
    }



    render() {
        return (
            <div className="natural-keys" onClick={(e) => this.props.onKeyTapped(this.state.letter)}>
                <div className="letter-holder">
                    {this.state.letter}
                </div>
                {this.props.children}
            </div>
        );
    }
}