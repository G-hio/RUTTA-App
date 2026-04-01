#  RUTTA-App (Mobile Architecture)

[![React Native](https://img.shields.io/badge/React_Native-0.7x-61DAFB?logo=react&logoColor=black)](https://reactnative.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth_&_DB-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Status](https://img.shields.io/badge/Status-In_Development-orange)]()

**RUTTA-App** es una solución de movilidad inteligente diseñada para la comunidad universitaria de **UNICUCES**. El proyecto busca optimizar la seguridad y los tiempos de espera mediante el rastreo en tiempo real de rutas estudiantiles.

##  Visión del Proyecto (MVP)
* **Seguridad Estudiantil:** Registro y autenticación mediante Firebase Auth.
* **Geolocalización:** Visualización de rutas en tiempo real (Google Maps API).
* **Eficiencia Operativa:** Notificaciones de proximidad y gestión de horarios.

##  Stack Tecnológico
* **Frontend:** React Native (Hooks & Context API).
* **Backend:** Firebase Cloud Firestore (NoSQL) & Authentication.
* **Navegación:** React Navigation v6.
* **Mapas:** React Native Maps.

##  Arquitectura de Carpetas (Clean Architecture)
El proyecto sigue una estructura modular para facilitar el escalamiento:
* `src/components`: UI Components reutilizables.
* `src/screens`: Vistas principales (Login, Map, Profile).
* `src/navigation`: Configuración de Stacks y Tab Navigators.
* `src/services`: Lógica de conexión con Firebase y APIs externas.

##  Instalación
```bash
git clone [https://github.com/G-hio/RUTTA-App.git](https://github.com/G-hio/RUTTA-App.git)
npm install
npx react-native start
