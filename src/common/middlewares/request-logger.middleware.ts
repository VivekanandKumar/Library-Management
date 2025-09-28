import { Injectable, NestMiddleware } from '@nestjs/common';
import { Logger } from '../logger/custom-logger.service';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class RequestLogger implements NestMiddleware {
  constructor(private readonly logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const startTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = Date.now() - startTime;
      const ip: any =
        req.headers['x-forwarded-for'] || req.socket.remoteAddress;

      const line = `${method} ${originalUrl} ${statusCode} ${responseTime}ms - IP: ${ip}`;
      this.logger.log(line, 'HTTP');
    });

    next();
  }
}
