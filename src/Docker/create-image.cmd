docker build --no-cache -f SQL\Dockerfile.PostgreSql -t o/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t o/app ../..
