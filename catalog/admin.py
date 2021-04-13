from django.contrib import admin
from django.db import models
from modeltranslation.admin import TranslationAdmin
from .models import Author, Book, BookInstance, FeedBack, Profile



class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'organization', 'position']

admin.site.register(Profile, ProfileAdmin)



class AuthorAdmin(TranslationAdmin):

    list_display = ('first_name', 'last_name')
    fields = ['first_name', 'last_name']


@admin.register(FeedBack)
class FeedBackAdmin(admin.ModelAdmin):
    list_display = ('name', 'status', 'name_space', 'email')

admin.site.register(Author, AuthorAdmin)


class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'specifications')
    inlines = [BooksInstanceInline]

@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_display = ('book', 'status', 'borrower')
    filter = 'status'
    fieldsets = (
        ('Availability', {
            'fields': ('book', 'status', 'borrower')
        }),
    )

