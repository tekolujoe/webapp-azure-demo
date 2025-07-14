# WebApp Azure Demo

This repository demonstrates how to deploy a static HTML web page to an Azure Web App using GitHub Actions for CI/CD.

## Project Overview

- **Web App Name:** webapp-azure
- **URL:** [https://webapp-azure.azurewebsites.net](https://webapp-azure.azurewebsites.net)
- **Resource Group:** rg-azure-webapp-demo
- **Region:** East US 2
- **Technology:** Static HTML

## What This Project Does

✅ Creates an Azure Web App for static web hosting  
✅ Configures secure deployment using Azure OIDC federated identity  
✅ Automates deployment via GitHub Actions on every push to `main`  
✅ Serves a simple static HTML page

## Repository Structure

.
├── .github/workflows/
│      └── azure-webapp-deploy.yml
├── LICENSE
├── README.md
└── index.html


## Workflow Details

The GitHub Actions workflow:
- Logs in to Azure using OIDC federated identity
- Deploys all files in the repo root to the Azure Web App

Workflow triggers:
- On every push to the `main` branch
- Manually via workflow_dispatch

## How To Deploy Changes

1. Edit `index.html` as desired
2. Commit your changes:
    ```bash
    git add index.html
    git commit -m "Update page content"
    git push origin main
    ```
3. The workflow deploys automatically
4. Visit the app URL to see updates live

---
