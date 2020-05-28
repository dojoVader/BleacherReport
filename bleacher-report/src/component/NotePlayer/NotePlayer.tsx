import React, { SyntheticEvent, ChangeEvent } from 'react';

interface NotePlayerState {
    manuscripts: string;
    
}

interface NotePlayerProps {
    sequencePlayed: (note: string) => void ;
}

export default class Noteplayer extends React.Component<NotePlayerProps, NotePlayerState>{

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

    playSequence = () => {
        const sequenceKey = this.state.manuscripts.split(',');
        const intervalReference = setInterval(() => {
            if(sequenceKey.length){
                // Emit the character and remove at the same time
                this.props.sequencePlayed(sequenceKey.shift() as string);
            }
            else{
                //Nothing to shift
                clearInterval(intervalReference);
            }
        },1000);
    }

    render = () => {
        return (
            <div className="player">
                <input type="text" value={this.state.manuscripts} onChange={this.setManuscript} />
                <button className="btn btn-primary" onClick={this.playSequence}>Play</button>
            </div>
        );
    }
}