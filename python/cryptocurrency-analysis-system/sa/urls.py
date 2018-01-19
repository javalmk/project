from django.conf.urls import url
from . import views

app_name = 'sa'

urlpatterns = [
	url(r'^$', views.IndexView.as_view(), name = 'index'),
	url(r'^blank/$',views.blank, name='blank'),
	url(r'^buttons/$',views.buttons, name='buttons'),
	url(r'^flot/$',views.flot, name='flot'),
	url(r'^forms/$',views.forms, name='forms'),
	url(r'^grid/$',views.grid, name='grid'),
	url(r'^icons/$',views.icons, name='icons'),
	
	url(r'^morris/$',views.morris, name='morris'),
	url(r'^notifications/$',views.notifications, name='notifications'),
	url(r'^panels_wells/$',views.panels_wells, name='panels-wells'),
	url(r'^tables/$',views.tables, name='tables'),
	url(r'^typography/$',views.typography, name='typography'),
]