import React from 'react';
import NaturalKeys from './NaturalKeys/NaturalKeys';
import FlatKeys from './FlatKeys/FlatKeys';
import './Piano.scss';

export interface PianoKeysProps {
    onKeyTapped: (n: string) => void;
    letter: string;
}

export interface PianoKeyState {
    letter: string;
    callback: (n: string) => void;
}

interface Notes {
    keysLogged: string[];
}

export default class Piano extends React.Component<{}, Notes> {

    constructor(props: any) {
        super(props);

        this.state = {
            keysLogged: []
        };

    }

    log = (note: string) => {
        console.log(note);
        if (note !== undefined && note.length > 0) {
            this.state.keysLogged.push(note);
            this.setState({
                keysLogged: this.state.keysLogged
            })
        }
    }


    render = () => {
        const keysTyped = this.state.keysLogged.map((e, index, arr) => {
            return <p key={index}>{e.toUpperCase()} {index !== (arr.length - 1) ? ',' : ''}</p>
        });
        return (
            <div>
                <div className="piano-application">
                    <NaturalKeys letter={"C"} onKeyTapped={this.log} >
                        <FlatKeys />
                    </NaturalKeys>

                    <NaturalKeys letter={"D"} onKeyTapped={this.log}>
                        <FlatKeys />
                    </NaturalKeys>

                    <NaturalKeys letter={"E"} onKeyTapped={this.log} />
                    <NaturalKeys letter={"F"} onKeyTapped={this.log} >
                        <FlatKeys />
                    </NaturalKeys>
                    <NaturalKeys letter={"G"} onKeyTapped={this.log} >
                        <FlatKeys />
                    </NaturalKeys>
                    <NaturalKeys letter={"A"} onKeyTapped={this.log} >
                        <FlatKeys />
                    </NaturalKeys>
                    <NaturalKeys letter={"B"} onKeyTapped={this.log} />
                </div>
                <div className="clearfix"></div>
                <div className="logs">
                    {keysTyped}
                    <div className="clearfix"></div>
                </div>

            </div>


        );
    }
}