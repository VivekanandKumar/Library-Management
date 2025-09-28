import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class Logger extends ConsoleLogger {
  constructor(context: string) {
    super(context, { timestamp: true });
  }
  /**
   * Write a 'log' level log.
   */
  log(message: any, context?: string) {
    super.log(`[LOG] ${message}`, context || this.context);
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, trace?: string, context?: string) {
    super.error(`[ERROR] ${message}`, trace, context || this.context);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: string, context?: string) {
    super.warn(`[WARN] ${message}`, context || this.context);
  }

  /**
   * Write a 'debug' level log.
   */
  debug(message: string, context?: string) {
    super.debug(`[DEBUG] ${message}`, context || this.context);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose(message: string, context?: string) {
    super.verbose(`[VERBOSE] ${message}`, context || this.context);
  }
}
