import React from 'react';
import NaturalKeys from './NaturalKeys/NaturalKeys';
import FlatKeys from './FlatKeys/FlatKeys';

export interface PianoKeys {
    letter: string;
}

export default class Piano extends React.Component {
    render() {
        return (
            <div>
                <div className="piano-application">
                <NaturalKeys letter={"C"} >
                    <FlatKeys />
                </NaturalKeys>

                <NaturalKeys letter={"D"}>
                    <FlatKeys />
                </NaturalKeys>

                <NaturalKeys letter={"E"} />
                <NaturalKeys letter={"F"} >
                    <FlatKeys />
                </NaturalKeys>
                <NaturalKeys letter={"G"} >
                    <FlatKeys />
                </NaturalKeys>
                <NaturalKeys letter={"A"} >
                    <FlatKeys />
                </NaturalKeys>
                <NaturalKeys letter={"B"} />
            </div>

            </div>
            
            
        );
    }
}