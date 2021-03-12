from django.urls import path
from . import views

from django.conf.urls import url

urlpatterns = [
    path('', views.index, name='index'),
    path('success/', views.FeedBackView.as_view(), name='feedback_view'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]

urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
    path(r'borrowed/', views.LoanedBooksAllListView.as_view(), name='all-borrowed'),
    path('myrequests/', views.RequestsByUserListView.as_view(), name='my-requests'),
]

# CТАТИСТИКА


urlpatterns += [
    path('analysis/', views.analysis_view, name='analysis_view'),
    path('cor/', views.LoanedDatasetsByUserListView.as_view(), name='cor-analysis'),
    path('cor-column/', views.get_column, name='cor-column'),
    path('result/', views.get_name, name='cor-result'),

]

urlpatterns += [
    path('component/', views.CompLoanedDatasetsByUserListView.as_view(), name='comp-analysis'),
    path('component-column/', views.get_column_comp, name='comp-column'),
    path('component-result/', views.get_name_comp, name='comp-result'),
]

urlpatterns += [
    path('statistics/', views.StatisticsLoanedDatasetsByUserLIstView.as_view(), name='statistics_view'),
    path('statistics-column/', views.get_column_statistics, name='statistics-column'),
    path('statistics-result/', views.get_name_statistics, name='statistics-result'),
]


