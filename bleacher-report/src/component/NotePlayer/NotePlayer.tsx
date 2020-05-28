import React, { SyntheticEvent, ChangeEvent } from 'react';
import SanitizeKeyNotes from '../../service/SanitizeKeynotes';

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
        let sanitizer= new SanitizeKeyNotes();
        if(sanitizer.isSequenceFormat(this.state.manuscripts)){
            const sequenceKey = this.state.manuscripts.replace(' ','').split(',');
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
        else{
            alert('Sorry but the format sent is Invalid, Keys are A-G Comma Seperated')
        }
        
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