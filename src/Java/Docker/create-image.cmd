docker build --no-cache -f SQL\Dockerfile.PostgreSql -t o-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t o-java/app ../../..
