FROM wordpress:latest

RUN apt-get update && apt-get install -y vim

RUN sed -i "s/define('DB_CHARSET', 'utf8');/\/\/define('DB_CHARSET', 'utf8');/g" /usr/src/wordpress/wp-config-sample.php
RUN sed -i "s/define('DB_COLLATE', '');/\/\/define('DB_COLLATE', '');/g" /usr/src/wordpress/wp-config-sample.php

RUN sed -i "s/define('WP_DEBUG', false);/define('WP_DEBUG', false);\n\n\nfunction WP_LOCATION () { \$script_path = realpath(dirname(\$_SERVER['SCRIPT_FILENAME'])); \$wp_base_path = realpath(dirname(__FILE__) . DIRECTORY_SEPARATOR . '..'); \$web_subfolder = substr( \$script_path, strlen(\$wp_base_path)); \$wp_path = \$web_subfolder ? substr( dirname(\$_SERVER['SCRIPT_NAME']), 0, -strlen(\$web_subfolder) ) : dirname(\$_SERVER['SCRIPT_NAME']) ; \$https = isset(\$_SERVER['HTTPS']) ? \$_SERVER['HTTPS'] : false; \$retval = 'http' . (\$https ? 's' : null) . ':\/\/' . \$_SERVER['HTTP_HOST'] . \$wp_path ; return \$retval; } define('OVERRIDE_URLS', true); if (OVERRIDE_URLS) { \$wpLocation = WP_LOCATION(); define('WP_HOME',\$wpLocation); define('WP_SITEURL',\$wpLocation); define('WP_CONTENT_URL',\$wpLocation.'\/wp-content'); }/g" /usr/src/wordpress/wp-config-sample.php
RUN sed -i "s/define('WP_DEBUG', false);/define('WP_DEBUG', false);\ndefine ('WPLANG', 'sv_SE');/g" /usr/src/wordpress/wp-config-sample.php
RUN sed -i "s/define ('WPLANG', 'sv_SE');/define ('WPLANG', 'sv_SE');\ndefine('DISALLOW_FILE_EDIT',true);/g" /usr/src/wordpress/wp-config-sample.php
RUN sed -i "s/define('WP_DEBUG', false);/define('WP_DEBUG', true);\ndefine('WP_DEBUG_LOG', true);\ndefine('WP_DEBUG_DISPLAY', false);/g" /usr/src/wordpress/wp-config-sample.php
RUN sed -i "s/opcache.revalidate_freq=60/opcache.revalidate_freq=0/g" /usr/local/etc/php/conf.d/opcache-recommended.ini
RUN usermod -u 1000 www-data

CMD chown -R www-data:www-data /var/www/html && touch /var/www/html/wp-content/debug.log && chmod 0777 /var/www/html/wp-content/debug.log && chmod 0777 /var/www/html/wp-content/uploads && /entrypoint.sh apache2-foreground
