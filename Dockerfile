FROM node:18-alpine

ARG BUILD_DATE
ARG VCS_REF
ARG BUILD_VERSION
ARG COMMITLINT_VERSION=17.4.4

RUN npm install -g @commitlint/cli@${COMMITLINT_VERSION} @commitlint/config-conventional@${COMMITLINT_VERSION}

ENTRYPOINT [ "commitlint"]