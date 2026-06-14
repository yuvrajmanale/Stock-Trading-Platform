# Authentication Setup

## Overview
This backend now uses JWT authentication with bcrypt password hashing.

### Endpoints
- `POST /api/auth/register` - create a new user
- `POST /api/auth/login` - login and receive a secure httpOnly cookie
- `POST /api/auth/logout` - clear auth cookie
- `GET /api/auth/me` - verify current user

### Protected APIs
- `GET /api/holdings`
- `GET /api/positions`
- `POST /api/orders`

## Environment variables
- `MONGO_URL`
- `JWT_SECRET`
- `FRONTEND_URL`
- `DASHBOARD_URL`

## Best practice notes
- Never store raw passwords in the database.
- Use `httpOnly` cookies for tokens to reduce XSS risk.
- Keep frontend and dashboard origins separate and allow both in CORS.
