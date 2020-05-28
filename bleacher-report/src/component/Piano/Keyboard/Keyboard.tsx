import React from 'react';
import NaturalKey from '../NaturalKeys/NaturalKey';
import FlatKeys from '../FlatKeys/FlatKeys';
import Noteplayer from '../../NotePlayer/NotePlayer';

interface Notes {
    keysLogged: string[];
    currentNotePlayed: string;
}

export default class KeyBoard extends React.Component<{}, Notes> {

    constructor(props: any) {
        super(props);

        this.state = {
            keysLogged: [],
            currentNotePlayed: ''
        };

    }

    log = (note: string) => {
        if (note !== undefined && note.length > 0) {
            this.state.keysLogged.push(note);
            this.setState({
                keysLogged: this.state.keysLogged
            });
        }
    }

    sequenceRecieved = (note: string) => {
        this.setState({
            currentNotePlayed: note
        })
    }


    render = () => {
        const keysTyped = this.state.keysLogged.map((e, index, arr) => {
            return <p key={index}>{e.toUpperCase()} {index !== (arr.length - 1) ? ',' : ''}</p>
        });

        const shouldRenderLogs = (this.state.keysLogged.length) ?
            (
                <code className="logs">
                    {keysTyped}
                    <div className="clearfix"></div>
                </code>) : '';
        return (
            <div>
                <NaturalKey currentNote={this.state.currentNotePlayed} letter={"C"} onKeyTapped={this.log} >
                    <FlatKeys />
                </NaturalKey>

                <NaturalKey currentNote={this.state.currentNotePlayed} letter={"D"} onKeyTapped={this.log}>
                    <FlatKeys />
                </NaturalKey>

                <NaturalKey currentNote={this.state.currentNotePlayed} letter={"E"} onKeyTapped={this.log} />
                <NaturalKey currentNote={this.state.currentNotePlayed} letter={"F"} onKeyTapped={this.log} >
                    <FlatKeys />
                </NaturalKey>
                <NaturalKey currentNote={this.state.currentNotePlayed} letter={"G"} onKeyTapped={this.log} >
                    <FlatKeys />
                </NaturalKey>
                <NaturalKey currentNote={this.state.currentNotePlayed} letter={"A"} onKeyTapped={this.log} >
                    <FlatKeys />
                </NaturalKey>
                <NaturalKey currentNote={this.state.currentNotePlayed} letter={"B"} onKeyTapped={this.log} />
                <div className="clearfix"></div>
                {shouldRenderLogs}
                <div className="clearfix"></div>
                <Noteplayer sequencePlayed={this.sequenceRecieved} />
            </div>
        );
    }
}