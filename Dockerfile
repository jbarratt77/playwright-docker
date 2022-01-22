FROM mcr.microsoft.com/playwright:focal
WORKDIR /
COPY . .
CMD ["npm", "start"]