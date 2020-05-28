import React from 'react';
import NaturalKey from './NaturalKeys/NaturalKey';
import FlatKeys from './FlatKeys/FlatKeys';
import './Piano.scss';
import Noteplayer from '../NotePlayer/NotePlayer';
import KeyBoard from './Keyboard/Keyboard';

export interface PianoKeysProps {
    onKeyTapped: (n: string) => void;
    letter: string;
    currentNote?: string;
    
}

export interface PianoKeyState {
    letter: string;
    isActive: boolean

}



export default class Piano extends React.Component {

    render = () => {


        return (
            <div>
                <div className="piano-application">
                    <KeyBoard />
                </div>

            </div>


        );
    }
}