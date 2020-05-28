import React, { SyntheticEvent } from 'react';
import './NaturalKeys.scss';
import { PianoKeysProps, PianoKeyState } from '../Piano';

let _callbackFn: any;
export default class NaturalKey extends React.Component<PianoKeysProps, PianoKeyState> {

    constructor(props: PianoKeysProps) {
        super(props);
        this.state = {
            letter: this.props.letter,
            isActive: false
        };
    }

    componentDidUpdate(prevProps: PianoKeysProps) {
        if (prevProps.currentNote !== this.props.currentNote && prevProps.letter === this.props.currentNote) {
            this.setState({
                isActive: true
            }, () => setTimeout(() => {
                this.setState({
                    isActive: false
                })
            }, 1000));
        }
    }


    onTap = (e: SyntheticEvent) => {
        console.log("Tapped letter %s", this.state.letter);
        _callbackFn(this.state.letter);
    }

    onMouseDown = () => {
        this.setState({
            isActive: true
        })
    }

    onMouseUp = () => {
        this.setState({
            isActive: false
        })
    }





    render = () => {
        return (
            <div className="natural-keys" >
                <div className={this.state.isActive ? 'active letter-holder' : 'letter-holder'} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onClick={(e) => this.props.onKeyTapped(this.state.letter)} >
                    {this.state.letter}
                </div>
                {this.props.children}
            </div>
        );
    }
}