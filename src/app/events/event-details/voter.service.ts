import { Injectable } from "@angular/core";
import { ISession } from '../shared/events.model';

@Injectable()
export class VoterService {
    deleteVoter(session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName)
    }

    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName)
    }

    userHasVoted(session: ISession, voterName: string) {
        // Return true or false
        return session.voters.some(voter => voter === voterName)
    }

}