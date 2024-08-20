


## Table of Contents 
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the application](#run-the-application)

## Prerequisites

Install the following prerequisites:

1. [Python 3.7-3.10](https://www.python.org/downloads/)
<br>This project uses **TensorFlow v2.8.0**. For TensorFlow to work, you must install a correct version of Python on your machine. More information [here](https://www.tensorflow.org/install/source#tested_build_configurations).
2. [Node.js](https://nodejs.org/en/)
3. [Visual Studio Code](https://code.visualstudio.com/download)


## Installation

### Backend

#### 1. Create a virtual environment

From the **root** directory, run:

```bash
cd backend
```
```bash
python -m venv venv
```

#### 2. Activate the virtual environment

From the **backend** directory, run:

On macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\scripts\activate
```

#### 3. Install required backend dependencies

From the **backend** directory, run:

```bash
pip install -r requirements.txt
```

#### 4. Run migrations

From the **backend** directory, run:

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

### Frontend

#### 1. Install required frontend dependencies

From the **root** directory, run:

```bash
cd frontend
```
```bash
npm install
```

## Run the application

To run the application, you need to have both the backend and the frontend up and running.

### 1. Run backend

From the **backend** directory, run:

```bash
python manage.py runserver
```

### 2. Run frontend

From the **frontend** directory, run:

```bash
npm run dev
```


