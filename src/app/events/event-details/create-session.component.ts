import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ISession } from '../shared/events.model'
import { restrictedWords } from '../shared/restricted-words-validator'

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html'

})

export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl
    newSessionForm: FormGroup

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValue) {
        let session: ISession = {
            id: undefined,
            name: formValue.name,
            duration: +formValue.duration,
            level: formValue.level,
            presenter: formValue.presenter,
            abstract: formValue.abstract,
            voters: [],

        }

        this.saveNewSession.emit(session)
    }

    cancel() {
        this.cancelAddSession.emit()
    }


}