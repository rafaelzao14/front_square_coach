/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * API de Agendamentos
 * API para gestão de agendamentos com usuários, professores e alunos.
 * OpenAPI spec version: 1.0
 */
import type { PublicUsuarioDtoTipoUsuario } from './publicUsuarioDtoTipoUsuario';

export interface PublicUsuarioDto {
  /** Data de nascimento do usuário */
  dataNascimento: string;
  /** ID do usuário */
  id: number;
  /** Nome completo do usuário */
  nomeCompleto: string;
  /** Tipo de usuário, pode ser aluno ou professor */
  tipoUsuario: PublicUsuarioDtoTipoUsuario;
}
