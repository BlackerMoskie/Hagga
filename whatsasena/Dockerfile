FROM fusuf/whatsasena:latest

RUN git clone https://github.com/BlackerMoskie/Hagga /root/Hagga
WORKDIR /root/Hagga/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
