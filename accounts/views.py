from django.shortcuts import render
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.forms import inlineformset_factory
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import *
from .forms import CreateUserForm
from django.utils.translation import gettext as _

def registerPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username', 'email')
                return redirect('login')
            else:
                form = CreateUserForm()
                message = _("The passwords are different! OR")
                message_error = _("The minimum password length is 5 symbols!")
                context = {'form': form, 'message': message, 'message_error': message_error}
                return render(request, 'accounts/register.html', context)


        context = {'form': form}
        return render(request, 'accounts/register.html', context)


def loginPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                message = 'Username OR password is incorrect'
                form = CreateUserForm()
                context = {'form': form, 'message': message}
                return render(request, 'accounts/login.html', context)

        context = {}
        return render(request, 'accounts/login.html', context)


def passwordPage(request):
    return render(request, 'accounts/password_reset_confirm.html', context)


def logoutUser(request):
    logout(request)
    return redirect('home')


context = {}


def home(request):
    return render(request, 'object_list.html', context)
