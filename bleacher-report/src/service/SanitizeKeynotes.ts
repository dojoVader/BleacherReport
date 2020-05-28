/**
 * @description This class is responsible for sanitizing keynotes key
 * coming from the Piano
 */

 const SEQUENCE_REGEXP = /^([a-gA-G]+,?\s*)+$/gm;
export default class SanitizeKeyNotes {

    isSequenceFormat(notes: string){
        return SEQUENCE_REGEXP.test(notes);
    }

}