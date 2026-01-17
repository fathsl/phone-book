# Build stage
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["PhonebookApi/PhonebookApi.csproj", "PhonebookApi/"]
RUN dotnet restore "PhonebookApi/PhonebookApi.csproj"
COPY . .
WORKDIR "/src/PhonebookApi"
RUN dotnet build "PhonebookApi.csproj" -c Release -o /app/build

# Publish stage
FROM build AS publish
RUN dotnet publish "PhonebookApi.csproj" -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 80
ENTRYPOINT ["dotnet", "PhonebookApi.dll"]