import { IProgramCard } from '../interfaces/program-card';

export function filterProgram(ProgramCard: IProgramCard[], program: string) {
    if (program !== '') {
        return ProgramCard.filter((v) => v.program === program);
    } return ProgramCard;
}

export function filterDirection(ProgramCard: IProgramCard[], direction: string) {
    if (direction !== '') {
        return ProgramCard.filter((v) => v.direction === direction);
    } return ProgramCard;
}
