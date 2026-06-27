FROM node:24 AS installer
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"
RUN corepack enable && corepack prepare pnpm@11.1.1 --activate
RUN pnpm add -g typescript@^6.0.3
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY frontend/package.json frontend/package.json
RUN pnpm install --ignore-scripts --frozen-lockfile
RUN pnpm rebuild sqlite3
COPY . /app
RUN pnpm run build:frontend
RUN rm -f frontend/dist/frontend/stats.json
RUN find frontend/dist/frontend/assets/i18n -type f ! -name 'en.json' -delete
RUN find data/static/i18n -type f ! -name 'en.json' -delete
RUN pnpm run --silent build:server
RUN rm -rf build/test
RUN CI=true pnpm prune --prod --ignore-scripts
RUN cd frontend && CI=true pnpm prune --prod --ignore-scripts
RUN rm -rf frontend/node_modules
RUN rm -rf frontend/.angular
RUN rm -rf frontend/src/assets
RUN mkdir logs
RUN chown -R 65532 logs
RUN chgrp -R 0 ftp/ frontend/dist/ logs/ data/ i18n/
RUN chmod -R g=u ftp/ frontend/dist/ logs/ data/ i18n/
RUN rm ftp/legal.md || true
RUN rm i18n/*.json || true

FROM gcr.io/distroless/nodejs24-debian13
ARG BUILD_DATE
ARG VCS_REF
LABEL maintainer="Hard Commerce Lab" \
    org.opencontainers.image.title="Yak Hair & Flair" \
    org.opencontainers.image.description="Configurable ecommerce storefront for automated agent evaluation" \
    org.opencontainers.image.authors="Hard Commerce Lab" \
    org.opencontainers.image.vendor="Hard Commerce Lab" \
    org.opencontainers.image.documentation="https://yak-shaving.example/help" \
    org.opencontainers.image.licenses="MIT" \
    org.opencontainers.image.version="20.1.1" \
    org.opencontainers.image.url="https://yak-shaving.example" \
    org.opencontainers.image.source="https://bike-shed.example/source" \
    org.opencontainers.image.revision=$VCS_REF \
    org.opencontainers.image.created=$BUILD_DATE
WORKDIR /app
COPY --from=installer --chown=65532:0 /app .
USER 65532
EXPOSE 3000
CMD ["/app/build/app.js"]
