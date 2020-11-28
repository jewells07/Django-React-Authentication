from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]

'''
'/auth/' => Manually

djoser => Documentation

User Create
http://127.0.0.1:8000/auth/users/

User Account Verification
http://127.0.0.1:8000/auth/users/activation/

Get JSON Web Tokens (Login)
http://127.0.0.1:8000/auth/jwt/create/

Get New Access Token
http://127.0.0.1:8000/auth/jwt/refresh/

Request New Password
http://127.0.0.1:8000/auth/users/reset_password/

Confirm New Password
http://127.0.0.1:8000/auth/users/reset_password_confirm/

'''