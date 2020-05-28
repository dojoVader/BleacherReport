import React, { SyntheticEvent, ChangeEvent } from 'react';

interface NotePlayerState {
    manuscripts: string;
}

export default class Noteplayer extends React.Component<{}, NotePlayerState>{

    constructor(props: any) {
        super(props);
        this.state = {
            manuscripts: ''
        }
    }

    setManuscript = (e: any) => {
        this.setState({
            manuscripts: (e.target.value) as string
        });
    }

    render = () => {
        return (
            <div className="player">
                <input type="text" value={this.state.manuscripts} onChange={this.setManuscript} />
                <button className="btn btn-primary">Play</button>
            </div>
        );
    }
}