type Model = {
    app: App
    inputs: Inputs
    timelines: Timelines[]
}
type App = {
    activeTimelineId: string | null
    currentPage: 'main' | 'edit' 
}
type Inputs = {
    main: InputMain;
    edit: InputEdit;
    view: InputView;
}

type InputEdit = {
  timeline: Timelines | null;
}

type InputView = {

}

type InputMain = {
     sortBy: 'title',
     sortDir: 'asc',
}

type Timelines = {
    span: number
    sidePad: number
    fontSize: number
    trackWidth: number
    radius: number
    orientation: 'horizontal'|'vertical'
    segments: [{
        id: string
        label: string
        position: number
        color: string
    }]
    textColor: string
    trackColor: string
}
export type {Timelines}
export type {App}
export type {Inputs}
export type {InputEdit}
export type {Model}