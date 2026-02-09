# Application Météo

## Introduction
Ce projet est un exercice donnée par mon formateur lors de ma formation "Dev Web et Web Mobile" afin de mettre en application notre apprentissage sur l'utilisation du JS en HTML avec une API.

## L'API
Cette application utilise une [API](https://openweathermap.org/forecast5?collection=current_forecast), du [site](https://openweathermap.org/) OpenWeather, permettant de récupérer plusieurs informations sur la météo des villes du mondes en temps réel.

## But sur l'application
Pour cette application, j'ai récupéré les données sur la météo en temps réel, pour les 5 prochains jours, sur la ville de Montbéliard, en Franche-Comté. L'application affiche 5 cards avec le jour, le temps, la température, la force du vents, etc.

## Développement
Le développement se passe avec du HTML et du JS. Dans le HTML, rien ne sera généré manuellement, tout sera affiché grâce au Javascript et ses méthodes **create.Element()**. J'utilise un client HTTP, *Axios*, afin de pouvoir utiliser l'API.
