FROM node:16.2.0-buster
EXPOSE 43444
COPY quotes.json package*.json ./
RUN npm install
COPY index.js ./
CMD ["npm","start"]
