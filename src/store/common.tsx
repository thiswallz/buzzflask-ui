import { atom } from 'jotai'

export enum FlaskShowCase {
    QuickFeedback,
    SocialMedia,
    SmartReview,
    DynamicUpselling,
    Accessibility,
    AppointmentScheduler
}

export const activeFlaskShowCaseAtom = atom<FlaskShowCase>(0)