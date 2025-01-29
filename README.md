# ToDo Backend - Express.js Application

A simple **To-Do List backend** built with **Express.js**, **Prisma**, and **MySQL**.

---

## 🚀 Getting Started

### 1️ Prerequisites
Make sure you have the following installed:
- **[Node.js](https://nodejs.org/)** (LTS recommended)
- **npm** (comes with Node.js)
- **[MySQL](https://www.mysql.com/)** (Ensure it is running)

---

### 2️ Installation
Clone the repository and install dependencies:

```sh
npm install
```

### 3 Configuration

#### i. Rename the environment file:

```sh
mv .env Example .env
```
#### ii. Open .env and set your MySQL credentials:
DATABASE_URL=mysql://username:password@localhost:3306/database_name
Replace:
        username → Your MySQL username
        password → Your MySQL password
        database_name → Your database name

### 4 Setup Database
Run the following commands to set up the database schema:

Generate Prisma Client
```sh
npm run prisma:generate
```
Deploy Prisma Migrations
```sh
npm run prisma:deploy
```
Push Schema Changes
```sh
npm run prisma:push
```
### 4 Setup Database
Run the server using:
```sh
npm run dev
```
Your backend should now be running on http://localhost:PORT (default is 9001).