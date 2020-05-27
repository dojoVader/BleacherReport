import React, { SyntheticEvent } from 'react';
import './NaturalKeys.scss';
import { PianoKeys } from '../Piano';

export default class NaturalKeys extends React.Component<PianoKeys, PianoKeys> {


    constructor(props: PianoKeys) {
        super(props);
        this.state = {
            letter: this.props.letter
        }
    }

    onTap = (e: SyntheticEvent) => {
        console.log("Tapped letter %s", this.state.letter);
    }
    render() {
        return (
            <div className="natural-keys" onClick={this.onTap}>
                <div className="letter-holder">
                    {this.state.letter}
                </div>
                {this.props.children}
            </div>
        );
    }
}