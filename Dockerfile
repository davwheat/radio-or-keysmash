FROM nginx:1

# Arguments defined in docker-compose.yml
ARG user
ARG uid

# Install Yarn and Node 18
RUN apt update -qq && apt install gnupg2 -y
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt update -qq && apt install -y nodejs yarn
RUN apt install -y python3 make g++

# Create system user
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

COPY ./ /app

WORKDIR /app

RUN yarn install --frozen-lockfile
RUN yarn clean
RUN yarn build

# Copy build to nginx folder
RUN cp -r /app/public /etc/nginx/html
RUN cp ./public/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /app

# Replace port
RUN sed -i -e 's/\$PORT/80/' /etc/nginx/nginx.conf
RUN sed -i -e '/^  brotli/d' /etc/nginx/nginx.conf
