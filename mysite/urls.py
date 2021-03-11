# -*- coding: utf-8 -*-
from __future__ import absolute_import, print_function, unicode_literals
from cms.sitemaps import CMSSitemap
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.i18n import i18n_patterns
from django.contrib.sitemaps.views import sitemap
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.static import serve
from django.urls import path, include
from django.contrib import admin
from django.urls import re_path
from django.views.i18n import JavaScriptCatalog
from django.conf.urls.static import static


admin.autodiscover()

urlpatterns = [
    url(r'^sitemap\.xml$', sitemap,
    {'sitemaps': {'cmspages': CMSSitemap}}),

]

urlpatterns += i18n_patterns(
    url(r'^admin/', admin.site.urls),  # NOQA
    url(r'^', include('cms.urls')),
    re_path(r'^jsi18n/$', JavaScriptCatalog.as_view(), name='javascript-catalog'),
)
urlpatterns += staticfiles_urlpatterns()
# This is only needed when using runserver.
if settings.DEBUG:
    urlpatterns = [
        url(r'^media/(?P<path>.*)$', serve,
            {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}),
        ] + staticfiles_urlpatterns() + urlpatterns

#Add Django site authentication urls (for login, logout, password management)
urlpatterns += [
    path('account/', include('django.contrib.auth.urls')),

]
urlpatterns += [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
    path('profile/', include('catalog.urls')),
    # path('analysis/', include('R.urls')),



]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
#from django.views.generic import RedirectView
#urlpatterns += [
#    path('', RedirectView.as_view(url='/catalog/', permanent=True)),]


# Используйте static() чтобы добавить соотношения для статических файлов
# Только на период разработки
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
