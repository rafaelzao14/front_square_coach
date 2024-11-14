/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * API de Agendamentos
 * API para gestão de agendamentos com usuários, professores e alunos.
 * OpenAPI spec version: 1.0
 */

export interface CreateAulaDisponivelDto {
  /** Horário da aula */
  horario: string;
  /** ID do professor responsável */
  idProfessor: number;
  /** Modalidade da aula */
  modalidade: string;
  /** Número máximo de alunos permitidos na aula */
  numeroMaximoAlunos: number;
  /** status */
  status?: string;
}