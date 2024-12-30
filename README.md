### **Citizen Benefit Calculator – Turbo Repo**

This project is a **Turbo Repo** using **PNPM** that consists of multiple apps. The application can be started either with Docker or locally. Below you will find all the necessary information for setup and usage.

---

### **Requirements**

- **Globally installed tools**:
  - [PNPM](https://pnpm.io/installation)
  - [Turbo](https://turbo.build)
- **PostgreSQL Database**: The server component requires a configured PostgreSQL instance.

---

### **Quickstart with Docker**

The easiest way to run the app is via Docker Compose:

```bash
docker-compose up --build
```

- This will automatically start all necessary components and services (including .env configurations from compose-file)

---

### **Manual Setup**

If you prefer not to use Docker, you can also start the app locally.

#### **1. Setup the Repository**

Install the dependencies:

```bash
pnpm install
```

#### **2. Start Apps**

- Individual apps:

  ```bash
  pnpm dev --filter <app-name>
  ```

  Example:

  ```bash
  pnpm dev --filter frontend
  pnpm dev --filter server
  ```

- All apps together:
  ```bash
  pnpm dev
  ```

#### **3. Configure .env Files**

To use the app, `.env` files need to be created. These files should follow the schema of the corresponding `.env.example` files.

- The `.env` files must be located in the same folder as their respective `.env.example` files.

#### **4. PostgreSQL Setup**

The server app requires a working PostgreSQL database. The connection is configured via the `.env` file from the server.

---

### **Notes**

- All changes to the configuration or database must be properly reflected in the corresponding `.env` files.
- Ensure that the database is accessible before starting the server.

---

### **Enjoy Testing!**
